'use client'
import React, { useEffect } from 'react'
import BgGlassmorphism from '@/components/BgGlassmorphism'
import { TaxonomyType } from '@/data/types'
import SectionSliderNewCategories from '@/components/SectionSliderNewCategories'
import SectionOurFeatures from '@/components/SectionOurFeatures'
import BackgroundSection from '@/components/BackgroundSection'
import SectionHowItWork from '@/components/SectionHowItWork'
import SectionBecomeAnAuthor from '@/components/SectionBecomeAnAuthor'
import SectionVideos from '@/components/SectionVideos'
import SectionHero3 from './(server-components)/SectionHero3'
import { useAppDispatch, useAppSelector } from '@/redux/app/hooks'
import { updatePrimaryFilter } from '@/redux/filters/filterSlice'
import { Feature_cities } from '@/data/featuredCity'
import Faq from '@/components/Faq'
import ExploreSpace from '@/components/ExploreSpace'
import MediaSection from '@/components/MediaSection'
import TrustedBySection from '@/components/TrustedBySection'
import CallToAction from '@/components/CallToAction'
import OurValues from '@/components/OurValues'
import logo1 from '../../public/images/trusted/logo1.svg'
import logo2 from '../../public/images/trusted/logo2.svg'
import logo3 from '../../public/images/trusted/logo3.svg'
import logo4 from '../../public/images/trusted/logo4.svg'
import logo5 from '../../public/images/trusted/logo5.svg'

export const logos = [
  { src: logo1, alt: 'Logo 1' },
  { src: logo2, alt: 'Logo 2' },
  { src: logo3, alt: 'Logo 3' },
  { src: logo4, alt: 'Logo 4' },
  { src: logo5, alt: 'Logo 5' },
]
const dummyLogoPartner: TaxonomyType[] = [
  {
    id: '1',
    href: '/',
    name: "Desklinq 'Workspace, On Demand' Streamlining Workspace Booking: Redefining Experience for Effortless Convenience",

    desc: 'Unlocking the Future of Flexible Workspaces.The Next Era in Workspace Booking: Elevating Convenience in a Dynamic Industry. Embracing Seamless Online Reservations for Enhanced Flexibility.With a focus on real-time bookings, desklinq redefines',
    logoUrl: 'dailyhunt',
    logosrc: logo1,
    taxonomy: 'category',
  },
  {
    id: '0',
    href: '/',
    name: "Desklinq 'Workspace, On Demand' Streamlining Workspace Booking: Redefining Experience for Effortless Convenience",

    desc: 'Unlocking the Future of Flexible Workspaces.The Next Era in Workspace Booking: Elevating Convenience in a Dynamic Industry. Embracing Seamless Online Reservations for Enhanced Flexibility.With a focus on real-time bookings, desklinq redefines',
    logoUrl: 'outlook',
    taxonomy: 'category',
    logosrc: logo2,
  },

  {
    logosrc: logo3,
    id: '2',
    href: '/',
    name: 'Desklinq ‘Workspace, On Demand’ Streamlining Workspace Booking: Redefining Experience for Effortless Convenience ',

    desc: 'The Next Era in Workspace Booking: Elevating Convenience in a Dynamic Industry. Embracing Seamless Online Reservations for Enhanced Flexibility.',
    logoUrl: 'deccanBusiness',
    taxonomy: 'category',
  },
  {
    logosrc: logo4,
    id: '7',
    href: '/',
    name: 'Desklinq ‘Workspace, On Demand’ Streamlining Workspace Booking: Redefining Experience for Effortless Convenience',

    desc: 'The Next Era in Workspace Booking: Elevating Convenience in a Dynamic Industry. Embracing Seamless Online Reservations for Enhanced Flexibility.',
    logoUrl: 'theStartupStory',
    taxonomy: 'category',
  },
  {
    logosrc: logo5,
    id: '3',
    href: '/',
    name: 'Desklinq ‘Workspace, On Demand’ Streamlining Workspace Booking: Redefining Experience for Effortless Convenience',

    desc: 'The Next Era in Workspace Booking: Elevating Convenience in a Dynamic Industry. Embracing Seamless Online Reservations for Enhanced Flexibility.',
    logoUrl: 'wowentrepreneurs',
    taxonomy: 'category',
  },
]
const dummyData: TaxonomyType[] = [
  {
    id: '1',
    href: '/',
    name: "Desklinq 'Workspace, On Demand' Streamlining Workspace Booking: Redefining Experience for Effortless Convenience",
    readMoreUrl: {
      pathname:
        'https://m.dailyhunt.in/news/india/english/republic+news+india-epaper-dhfacc36dfce9c4bb68db0e89d033c921b/desklinq+workspace+on+demand+streamlining+workspace+booking+redefining+experience+for+effortless+convenience-newsid-dhfacc36dfce9c4bb68db0e89d033c921b_8510e420c0be11eebb378cdddf580e79?sm=Y',
    },
    desc: 'Unlocking the Future of Flexible Workspaces.The Next Era in Workspace Booking: Elevating Convenience in a Dynamic Industry. Embracing Seamless Online Reservations for Enhanced Flexibility.With a focus on real-time bookings, desklinq redefines',
    logoUrl: 'dailyhunt',
    taxonomy: 'category',
  },
  {
    id: '0',
    href: '/',
    name: "Desklinq 'Workspace, On Demand' Streamlining Workspace Booking: Redefining Experience for Effortless Convenience",
    readMoreUrl: {
      pathname:
        'https://www.outlookindia.com/business-spotlight/driving-success-the-remarkable-journeys-of-todays-top-10-businesses',
    },
    desc: 'Unlocking the Future of Flexible Workspaces.The Next Era in Workspace Booking: Elevating Convenience in a Dynamic Industry. Embracing Seamless Online Reservations for Enhanced Flexibility.With a focus on real-time bookings, desklinq redefines',
    logoUrl: 'outlook',
    taxonomy: 'category',
  },

  {
    id: '2',
    href: '/',
    name: 'Desklinq ‘Workspace, On Demand’ Streamlining Workspace Booking: Redefining Experience for Effortless Convenience ',
    readMoreUrl: {
      pathname:
        'https://deccanbusiness.com/desklinq-workspace-on-demand-streamlining-workspace-booking-redefining-experience-for-effortless-convenience/',
    },
    desc: 'The Next Era in Workspace Booking: Elevating Convenience in a Dynamic Industry. Embracing Seamless Online Reservations for Enhanced Flexibility.',
    logoUrl: 'deccanBusiness',
    taxonomy: 'category',
  },
  {
    id: '7',
    href: '/',
    name: 'Desklinq ‘Workspace, On Demand’ Streamlining Workspace Booking: Redefining Experience for Effortless Convenience',
    readMoreUrl: {
      pathname:
        'https://thestartupstory.in/desklinq-workspace-on-demand-streamlining-workspace-booking-redefining-experience-for-effortless-convenience/',
    },
    desc: 'The Next Era in Workspace Booking: Elevating Convenience in a Dynamic Industry. Embracing Seamless Online Reservations for Enhanced Flexibility.',
    logoUrl: 'theStartupStory',
    taxonomy: 'category',
  },
  {
    id: '3',
    href: '/',
    name: 'Desklinq ‘Workspace, On Demand’ Streamlining Workspace Booking: Redefining Experience for Effortless Convenience',
    readMoreUrl: {
      pathname:
        'https://wowentrepreneurs.com/desklinq-workspace-on-demand-streamlining-workspace-booking-redefining-experience-for-effortless-convenience/',
    },
    desc: 'The Next Era in Workspace Booking: Elevating Convenience in a Dynamic Industry. Embracing Seamless Online Reservations for Enhanced Flexibility.',
    logoUrl: 'wowentrepreneurs',
    taxonomy: 'category',
  },

  {
    id: '4',
    href: '/',
    name: 'Desklinq ‘Workspace, On Demand’ Streamlining Workspace Booking: Redefining Experience for Effortless Convenience',
    readMoreUrl: {
      pathname:
        'https://business.republicnewsindia.com/desklinq-workspace-on-demand-streamlining-workspace-booking-redefining-experience-for-effortless-convenience/',
    },
    desc: 'The Next Era in Workspace Booking: Elevating Convenience in a Dynamic Industry. Embracing Seamless Online Reservations for Enhanced Flexibility.',
    logoUrl: 'businessRepublicNewsIndia',
    taxonomy: 'category',
  },
  {
    id: '5',
    href: '/',
    name: 'Desklinq ‘Workspace, On Demand’ Streamlining Workspace Booking: Redefining Experience for Effortless Convenience',
    readMoreUrl: {
      pathname:
        'https://biz.theindianbulletin.com/desklinq-workspace-on-demand-streamlining-workspace-booking-redefining-experience-for-effortless-convenience/',
    },
    desc: 'The Next Era in Workspace Booking: Elevating Convenience in a Dynamic Industry. Embracing Seamless Online Reservations for Enhanced Flexibility.',
    logoUrl: 'theIndianBulletin',
    taxonomy: 'category',
  },
  {
    id: '6',
    href: '/',
    name: 'Desklinq ‘Workspace, On Demand’ Streamlining Workspace Booking: Redefining Experience for Effortless Convenience',
    readMoreUrl: {
      pathname: 'https://www.startupinsider.in/?p=5863',
    },
    desc: 'The Next Era in Workspace Booking: Elevating Convenience in a Dynamic Industry. Embracing Seamless Online Reservations for Enhanced Flexibility.',
    logoUrl: 'startupInsider',
    taxonomy: 'category',
  },
]

function PageHome() {
  type SearchTab = 'Hot desk' | 'Meeting rooms' | 'Virtual office'
  const tabs: SearchTab[] = ['Hot desk', 'Meeting rooms', 'Virtual office']
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(updatePrimaryFilter({ space: tabs[0] }))

    dispatch(updatePrimaryFilter({ coordinates: [77.5945627, 12.9715987] }))
  }, [])
  return (
    <main className="nc-PageHome font-satoshi relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />
      <div className="container py-3 px-1 sm:px-4 mb-24 ">
        <SectionHero3 className="" />
      </div>
      <div className=" bg-[#FAFAFC] relative space-y-24 mb-10 lg:space-y-28 lg:mb-28">
        <SectionHowItWork />
      </div>
      <ExploreSpace />
      <div className="bg-[#FAFAFC] relative md:px-40 md:py-10 space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        {/* <SectionSliderNewCategories
          heading="Explore by types of offerings"
          subHeading="Give wings to your dreams"
          categoryCardType="card5"
          itemPerRow={4}
        /> */}
        <div className="container mx-auto">
          <SectionSliderNewCategories
            categories={Feature_cities}
            itemPerRow={6}
            maincategory="city"
          />
        </div>
        <div className=" bg-[#FAFAFC] relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
          <SectionOurFeatures />
        </div>
        <OurValues />
        {/* <div className="relative py-8">
          <BackgroundSection />
          <SectionBecomeAnAuthor />
        </div> */}
      </div>
      <div className="bg-[#FAFAFC] relative md:px-40 py-10 space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        <SectionVideos />
      </div>
      <MediaSection categories={dummyData} />
      {/* <SectionSliderNewCategories
          heading="The media is been talking about us!"
          categories={dummyData}
          subHeading=""
          categoryCardType="card7"
          itemPerRow={4}
        /> */}
      {/* <TrustedBySection /> */}

      <div className="container pt-[100px] mx-auto">
        <SectionSliderNewCategories
          heading=""
          categories={dummyLogoPartner}
          subHeading="Our Workspaces are trusted by more than 25+ Startups"
          categoryCardType="card7"
          itemPerRow={4}
        />
      </div>
      <div className="pt-[100px]">
        <Faq page="main" />
      </div>
      <div className="py-[100px] ">
        <CallToAction />
      </div>
    </main>
  )
}

export default PageHome
