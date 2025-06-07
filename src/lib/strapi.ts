import { cache } from 'react'

interface Category {
  id: number
  documentId: string
  name: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

// 定义类型
interface Product {
  id: number
  documentId: string
  name: string
  description: string | null
  isNew: boolean
  image: {
    id: number
    name: string
    formats: {
      thumbnail: ImageFormat
      small: ImageFormat
      medium: ImageFormat
    }
    url: string
  }
  categories: Category[]
  createdAt: string
  updatedAt: string
  publishedAt: string
}

interface ImageFormat {
  name: string
  hash: string
  ext: string
  mime: string
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
  path: string | null
}

interface ApiResponse<T> {
  data: T[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337'

const fetchAPI = cache(async <T>(endpoint: string): Promise<T> => {
  const res = await fetch(`${STRAPI_URL}/api/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN || ''}`,
    },
    next: { revalidate: 60 },
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch data from ${endpoint}`)
  }

  return res.json()
})

export const getProducts = cache(async () => {
  const response = await fetchAPI<ApiResponse<Product>>('products?populate=*')
  return response.data.map((product) => ({
    id: product.id.toString(),
    documentId: product.documentId,
    name: product.name,
    description: product.description || '',
    isNew: product.isNew,
    // 使用合适的图片格式，优先使用small格式或原始格式
    image: `${STRAPI_URL}${product.image?.formats?.small?.url || product.image?.url || ''}`,
    categories: product.categories?.map(category => category.name) || [],
    createdAt: product.createdAt,
    updatedAt: product.updatedAt,
  }))
})
