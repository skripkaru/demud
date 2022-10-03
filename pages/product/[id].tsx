import type {NextPage} from 'next'
import {useRouter} from "next/router";
import {products} from "../../constants";
import Layout from "components/Layout";

const Product: NextPage = () => {
  const router = useRouter()
  const {id}: any = router.query

  return (
    <Layout>
      <section
        className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h1 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">{products[id]?.title}</h1>
          <p className="mt-4 text-gray-500">{products[id]?.body}</p>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Материал</dt>
              <dd className="mt-2 text-sm text-gray-500">{products[id]?.material}</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Размеры</dt>
              <dd className="mt-2 text-sm text-gray-500">{products[id]?.dimensions}</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Цвет</dt>
              <dd className="mt-2 text-sm text-gray-500">{products[id]?.color}</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Цена</dt>
              <dd className="mt-2 text-sm text-gray-500">{products[id]?.price}&#8381;</dd>
            </div>
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          {products[id]?.images.map(item =>
            <img
              src={item}
              alt={products[id]?.title}
              className="rounded-lg bg-gray-100"
            />
          )}
        </div>
      </section>
    </Layout>
  )
}

export default Product
