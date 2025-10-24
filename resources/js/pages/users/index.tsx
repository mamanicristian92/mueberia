import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, Product, Url } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import Pagination from '@/components/pagination';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Productos',
        href: route('products.index'),
    },
];

interface ProductsPaginated {
    data: Product[];
    links: Url[];
}

export default function Index({products}: {products: ProductsPaginated}) {
    const {processing, delete: destroy} = useForm();

    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this product')) {
            destroy(route('products.destroy', id))
        }
    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Productos" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link href={route('products.create')}>
                    <Button className='mb-4'>
                        Create Product
                    </Button>
                </Link>
                {products.data.length > 0 && (
                    <Table>
                        <TableCaption>Lista de Prodcutos</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">ID</TableHead>
                                <TableHead>Nombre</TableHead>
                                <TableHead>Descripción</TableHead>
                                <TableHead>Stock</TableHead>
                                <TableHead>Precio</TableHead>
                                <TableHead>Tipo</TableHead>
                                <TableHead className="text-right">Acciones</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {products.data.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell className="font-medium">{product.id}</TableCell>
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell>{product.description}</TableCell>
                                    <TableCell>{product.stock}</TableCell>
                                    <TableCell>{new Intl.NumberFormat('en-us', {minimumFractionDigits: 2}).format(product.price)}</TableCell>
                                    <TableCell>{product.type.name}</TableCell>
                                    <TableCell className="text-right space-x-2">
                                        <Link /* href={route('products.edit', product.id)} */>
                                            <Button className='bg-slate-500 hover:bg-slate-700'>Edit</Button>
                                        </Link>
                                        <Button
                                            disabled={processing}
                                            className='bg-red-500 hover:bg-red-700'
                                            onClick={() => handleDelete(product.id)}
                                        >Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
                <div className='my-2'>
                    <Pagination links={products.links} />
                </div>
            </div>
        </AppLayout>
    );
}

