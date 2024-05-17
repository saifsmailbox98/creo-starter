"use client";
import useSWR from 'swr';
import DataTable from "@trycreo/ui/dist/src/components/ui/data-table";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

interface ProductsTableProps {
    onSelectProduct: (product: Product) => void;
}

export default function ProductsTable({ onSelectProduct }: ProductsTableProps) {
    const { data, error } = useSWR('/tools/startup/api/products/', fetcher);
    
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    const columns = [
        {
            accessorKey: "id",
            header: "ID",
        },
        {
            accessorKey: "name",
            header: "Name",
        },
        {
            accessorKey: "price",
            header: "Price",
            cell: ({ row }: any) => {
                const data = row.original;
                return <div>${data.price}</div>;
            },
        },
    ];

    function onRowsSelectedCallback(selectedRows: any) {
        if (selectedRows.length > 0) {
            onSelectProduct(selectedRows[0]);
        }
    }

    return (
        <DataTable
            selectionMode="single"
            onRowsSelected={onRowsSelectedCallback}
            columns={columns}
            data={data}
            pageSize={10}
            isSearchable={true}
        />
    );
}