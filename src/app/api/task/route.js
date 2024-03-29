import { NextResponse } from "next/server";
import { prisma } from "@/src/libs/prisma";

export async function GET(){
    const tasks = await prisma.task.findMany()
    return NextResponse.json({tasks})
}

export async function POST(request){
    try {
        const {title, description} = await request.json()
        const newTask = await prisma.task.create({
            data: { title, description }
        })
        return NextResponse.json(newTask)
    } catch (e) {
        return e
    }
}