"use client"

import { deleteTask } from "@/app/actions/tasks"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useRouter } from 'next/navigation'
import { CircleCheck, Trash } from "lucide-react"

type pageProps = {
    id: string
}

export default function DeleteDialog(data: pageProps) {
    const router = useRouter()

    const f = data.id

    async function handleDelete(id: string) {
        await deleteTask(id)
        router.refresh()
    }

    return (
        <AlertDialog >
            <AlertDialogTrigger asChild>
                <Trash color='red' />
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Are you sure you want to delete this task? This action can't be undone!
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleDelete(f)}>Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}