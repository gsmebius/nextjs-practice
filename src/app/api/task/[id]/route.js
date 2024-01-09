import { NextResponse } from "next/server";
import { prisma } from "@/src/libs/prisma";

export async function GET(request, {params}){
    const uniqueTask = await prisma.task.findUnique({
        where: {
            id: Number(params.id)
        }
    })
    return NextResponse.json(uniqueTask)
}

export async function PUT(request, {params}){
    try {
        const {title, description} = await request.json()
        const updateTask = await prisma.task.update({
            data: { title, description },
            where: { id: Number(params.id) }
        })
        return NextResponse.json(updateTask)
    } catch (e) {
        return e
    }
}

export async function DELETE(request, {params}){
    const uniqueTask = await prisma.task.delete({
        where: {
            id: Number(params.id)
        }
    })
    return NextResponse.json(uniqueTask)
}
