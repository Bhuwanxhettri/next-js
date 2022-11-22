import React from 'react'
import { useRouter } from 'next/router'

const BookDetails = () => {
    const router = useRouter()
    const { id } = router.query
  return (
    <div>Dynamic Routes Book details {id}</div>
  )
}

export default  BookDetails