"use server"

import prisma from "../../lib/prisma";


type CreateTask = {
    name: string,
}

type taskCompleted = {
    id: string,
    isCompleted: boolean,
}

export async function createTask(data: CreateTask) {
    await prisma.task.create({
        data: {
            name: data.name,
        },
    })
}

export async function getTask() {
    const tasks = await prisma.task.findMany()
    return tasks
}


export async function deleteTask(id: string) {
    await prisma.task.delete({
        where: {
            id: id,
        },
    })
}

export async function isCompleted(data: taskCompleted) {
    await prisma.task.update({
        where: {
            id: data.id,
        },
        data: {
            isCompleted: data.isCompleted,
        },
    })
}

export async function getCompletedTask() {
    const tasks = await prisma.task.findMany({
        where: {
            isCompleted: true,
        }})
    return tasks
}

export async function getUncompletedTask() {
    const tasks = await prisma.task.findMany({
        where: {
            isCompleted: false,
        }})
    return tasks
}

