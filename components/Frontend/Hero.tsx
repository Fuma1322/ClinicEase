'use client'

import React from "react";
import { useState } from 'react'
import { FlipWords } from "../ui/flip-words";
import { FlipWordsCopy } from "../ui/flip-words copy";
import { Button } from "../ui/moving-border"
import Link from "next/link";


export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const words = ["Clinic:"];
  const word = ["Your", "Hands"];

  return (
      <div className="relative isolate px-6 pt-14 lg:px-8 -top-20">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-r from-slate-800 to-slate-500 opacity-70 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
        <div className="h-[23rem] flex justify-center items-center">
            <div className="text-6xl mx-auto font-bold tracking-tight text-black dark:text-gray-300 sm:text-6xl">
                From Screen To
                <FlipWords words={words} /> <br />
                Your Health In
                <FlipWordsCopy words={word} /> <br />
            </div>
            </div>
          <div className="hidden sm:flex sm:justify-center">
          </div>
            <p className="text-lg leading-8 text-gray-400">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/register">
            <Button
              borderRadius="1.55rem"
              className=" dark:bg-slate-600 text-black dark:text-white border-neutral-600 dark:border-slate-800"
             >
              Get Started
            </Button>
            </Link>
          </div>
          
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
        </div>
      </div>
  )
}

