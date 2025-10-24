<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Product;
use Inertia\Inertia;
use App\Models\ProductType;
use App\Models\Photo;
use Log;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render('products/index', [
            'products' => Product::with('type:id,name')->paginate(10),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return inertia('products/create', [
            'products' => new Product(),
            'productTypes' => ProductType::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        //
        Log::channel('test')->info("StoreProduct called");
        $validated = $request->validated();
        Product::create($validated);
        if ($request->hasFile('images')) {
            $images=$request->file('images');
            foreach ($images as $image) {
                $urlImage = "storage/".$image->store('images/products', 'public');
                $photo=Photo::create([
                    'url' => $urlImage,
                    'description' => 'Imagen del producto '.$validated['name'],
                ]);
                $photo->products()->attach(Product::latest()->first()->id);
            }
        }        

        return redirect()->route('products.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
        return Inertia::render('products/show', [
            'product' => $product->load('type', 'photos'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
        return Inertia::render('products/edit', [
            'product' => $product->load('type', 'photos'),
            'productTypes' => ProductType::all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        //
        Log::channel('test')->info("UpdateProduct called");
        $validated = $request->validated();
        $product->update($validated);
        if ($request->deleted_photos) {
            Photo::whereIn('id', $request->deleted_photos)->delete();   //borramos fotos
        }
        foreach ($request->new_photos as $image) {  //agregamos nuevas fotos
            $urlImage = "storage/".$image->store('images/products', 'public');
            $photo=Photo::create([
                'url' => $urlImage,
                'description' => 'Imagen del producto '.$validated['name'],
            ]);
            $photo->products()->attach($product->id);   //asociamos foto al producto
        }
        return redirect()->route('products.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
