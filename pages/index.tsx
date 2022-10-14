import { useAuth } from "@hooks/useAuth"

import { Layout } from "@layout/Index"

import { Button } from "@ui/button/Index"

import type { NextPage } from "next"

const Home: NextPage = () => {
  const as = useAuth()
  const a = "0"
  return (
    <>
      <Layout />
      <Button />
    </>
  )
}

export default Home
