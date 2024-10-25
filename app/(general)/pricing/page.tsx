import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pricing Title',
  description: 'Pricing Description',
};

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing Page</span>
    </>
  )
}