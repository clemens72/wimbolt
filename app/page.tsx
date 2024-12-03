"use client"
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Image from 'next/image'
import logo from '@/assets/logo.png'
import { Button } from "./../components/ui/button"
import { LP_GRID_ITEMS } from "@/assets/lp-items"


export default function Web() {

  const { data: session, status } = useSession();
  const router = useRouter();

  const showSession = () => {
    if (status === "authenticated") {
      return (
        <section>
          <p>Signed in as {session.user?.email}</p>
          <Button
            className="m-4 border border-solid border-black rounded"
            onClick={() => {
              router.push("/dashboard");
            }}
          >
            Dashboard
          </Button>
          <Button
            className="m-4 border border-solid border-black rounded"
            onClick={() => {
              signOut({ redirect: false }).then(() => {
                router.push("/");
              });

            }}
          >
            Sign Out
          </Button>
        </section>
      )
    } else if (status === "loading") {
      return (
        <span className="text-[#888] text-sm mt-7">Loading...</span>
      )
    } else {
      return (
        <Button
          className="m-4 border border-solid border-black rounded"
          variant="ghost"
          onClick={() => {
            // router.push("/");
          }}
        >
          Sign In
        </Button>
      )
    }
  }

  return (
    <>
      <section className="dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <Image className="mx-auto place-self-center mb-4"
              src={logo}
              width={100}
              height={100}
              alt="WiMBL"
            />
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-primary dark:text-white md:text-5xl xl:text-6xl">
              WiMBL
            </h1>
            {showSession()}
            <p>Demo environment -- not testing authentication right now.</p>
            <Button
              className="m-4 border border-solid border-black rounded"
              onClick={() => {
                router.push("/dashboard");
              }}
            >
              Skip to Dashboard
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            {LP_GRID_ITEMS.map((singleItem) => (
              <div key={singleItem.title} className="flex flex-col items-center justify-center text-center">
                <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-secondary p-1.5 dark:bg-primary-900 lg:size-12">
                  {singleItem.icon}
                </div>
                <h2 className="mb-2 text-xl font-bold text-primary dark:text-white">{singleItem.title}</h2>
                <p className="text-primary dark:text-gray-400">{singleItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}