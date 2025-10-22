<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ProductType;

class ProductTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        ProductType::create([
            'name' => 'Silla',
            'description' => 'Tipo de producto: Silla',
        ]);
        ProductType::create([
            'name' => 'Mesa',
            'description' => 'Tipo de producto: Mesa',
        ]);
        ProductType::create([
            'name' => 'Sofá',
            'description' => 'Tipo de producto: Sofá',
        ]);
        ProductType::create([
            'name' => 'Cama',
            'description' => 'Tipo de producto: Cama',
        ]);
        ProductType::create([
            'name' => 'Ropero',
            'description' => 'Tipo de producto:Ropero',
        ]);
        ProductType::create([
            'name' => 'Placard',
            'description' => 'Tipo de producto: Placard',
        ]);
        ProductType::create([
            'name' => 'Estantería',
            'description' => 'Tipo de producto: Estantería',
        ]);
        ProductType::create([
            'name' => 'Escritorio',
            'description' => 'Tipo de producto: Escritorio',
        ]);
        ProductType::create([
            'name' => 'Cómoda',
            'description' => 'Tipo de producto: Cómoda',
        ]);
        ProductType::create([
            'name' => 'Vitrina',
            'description' => 'Tipo de producto: Vitrina',
        ]);
        ProductType::create([
            'name' => 'Mesa de TV',
            'description' => 'Tipo de producto: Mesa de TV',
        ]);
        ProductType::create([
            'name' => 'Bajo Mesada',
            'description' => 'Tipo de producto: Bajo mesada',
        ]);
        ProductType::create([
            'name' => 'Alacena',
            'description' => 'Tipo de producto: Alacena',
        ]);
        ProductType::create([
            'name' => 'Mesa de luz',
            'description' => 'Tipo de producto: Mesa de luz',
        ]);
    }
}
