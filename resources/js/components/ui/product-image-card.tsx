import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface ProductImageCardProps {
    key: number;
    imageUrl: string;
    description: string;
    onEdit: () => void;
    onDelete: () => void;
}
export default function ProductImageCard({
    imageUrl,
    description,
    onEdit,
    onDelete,
}: ProductImageCardProps) {
    return (
        <Card className="w-full max-w-sm">
            <CardContent>
                <div>
                    <div className="flex flex-col gap-6">
                        <img src={imageUrl} alt={description} />
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex-row gap-2">
                <Button className="w-full" onClick={onEdit}>
                    Edit
                </Button>
                <Button variant="destructive" className="w-full" onClick={onDelete}>
                    Delete
                </Button>
            </CardFooter>
        </Card>
    )
}

export { ProductImageCard }