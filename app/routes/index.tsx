// app/routes/index.tsx
import * as fs from 'node:fs'
import { createFileRoute, useRouter, Link } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import {Button} from "@/components/ui/button"

const filePath = 'count.txt'

async function readCount() {
  return parseInt(
    await fs.promises.readFile(filePath, 'utf-8').catch(() => '0'),
  )
}

const getCount = createServerFn({
  method: 'GET',
}).handler(() => {
  return readCount()
})

const updateCount = createServerFn({ method: 'POST' })
  .validator((d: number) => d)
  .handler(async ({ data }) => {
    const count = await readCount()
    await fs.promises.writeFile(filePath, `${count + data}`)
  })

export const Route = createFileRoute('/')({
  component: Home,
  loader: async () => await getCount(),
})

function Home() {
  const router = useRouter()
  const state = Route.useLoaderData()

  return (
    <div className='min-h-screen min-w-screen flex flex-col'>
        <div className='h-16 bg-gray-800 text-white flex items-center justify-center'>
          <h1 className='text-2xl font-bold'>Real Estate Analysis and Valuation</h1>
        </div>
        <div className='flex-1 bg-gray-100'>
          <Link to='/dashboard' className='p-2 font-bold'>Dashboard</Link>
        </div>
      </div>
  )
   
}