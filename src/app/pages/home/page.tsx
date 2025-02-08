
import React from "react"
import Footer from "@/app/components/footer"
import Navbar from "@/app/components/Navbar"
import Hero from "@/app/components/Hero"
import Section from "@/app/components/Section"
import Section2 from "@/app/components/Section2"
import Blog from "@/app/components/Blog"
import Insta from "@/app/components/Insta"
import { ClassNames } from "@emotion/react"
import Toppicks from "@/app/components/Toppicks"


export default function Home() {
    return (
       <div className="bg-[#FBEBB5]">
        <Navbar />
        <div>
            <Hero />
            <Section />
            <Toppicks />
            <Section2 />
            <Blog />
            <Insta />
        </div>
       </div>

    )
}