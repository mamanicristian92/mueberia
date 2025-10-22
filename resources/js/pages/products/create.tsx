import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Product',
        href: '/products/create',
    },
];

interface ProductType {
    id: number;
    name: string;
    description: string;
}

export default function Create({productTypes}: {productTypes: ProductType[]}) {

    const {data, setData, post, processing, errors} = useForm({
        name: '',
        description: '',
        stock: '',
        price: '',
        product_type_id: ''
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('products.store'));
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products | Create" />
            <div className='p-4 max-w-md'>
                <form onSubmit={handleSubmit} method='post' className='space-y-4'>
                    <div className='gap-1.5'>
                        <Input
                            placeholder='Nombre'
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                        ></Input>
                        {errors.name && (
                            <div className='flex items-center text-red-500 text-sm mt-1'>
                                {errors.name}
                            </div>
                        )}
                    </div>
                    <div className='gap-1.5'>
                        <Input
                            placeholder='Stock'
                            value={data.stock}
                            onChange={e => setData('stock', e.target.value)}
                        ></Input>
                        {errors.stock && (
                            <div className='flex items-center text-red-500 text-sm mt-1'>
                                {errors.stock}
                            </div>
                        )}
                    </div>
                    <div className='gap-1.5'>
                        <Input
                            placeholder='Precio'
                            value={data.price}
                            onChange={e => setData('price', e.target.value)}
                        ></Input>
                        {errors.price && (
                            <div className='flex items-center text-red-500 text-sm mt-1'>
                                {errors.price}
                            </div>
                        )}
                    </div>
                    <div className='gap-1.5'>
                        <Select
                            onValueChange={value => setData('product_type_id', value)}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Product Type" />
                            </SelectTrigger>
                            <SelectContent>
                                {productTypes.map((type) => (
                                    <SelectItem
                                        key={type.id}
                                        value={type.id.toString()}>
                                        {type.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors.price && (
                            <div className='flex items-center text-red-500 text-sm mt-1'>
                                {errors.price}
                            </div>
                        )}
                    </div>
                    <div className='gap-1.5'>
                        <Textarea 
                            placeholder="Descripción"
                            value={data.description}
                            onChange={e => setData('description', e.target.value)} 
                        />
                        {errors.description && (
                            <div className='flex items-center text-red-500 text-sm mt-1'>
                                {errors.description}
                            </div>
                        )}
                    </div>
                    <Button disabled={processing} type='submit'>
                        Create Product
                    </Button>
                </form>
            </div>
        </AppLayout>
    );
}
