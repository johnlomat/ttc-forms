import type { Metadata } from 'next'
import Header from '@/components/Header'
import MultiStep from '@/components/MultiStep'
import Separator from '@/components/ui/Separator'
import Card from '@/components/ui/Card'
import { HeadingTwo } from '@/components/ui/Headings'

export const metadata: Metadata = {
  title: 'Alpha Quote | Talent Trust',
}

export default function AlphaQuote() {
  return (
    <div className="page-container space-y-4 bg-sky-50 py-[30px] font-open-sans">
      <MultiStep href="https://www.talent-trust.com/alphaquote/" />

      <Header>
        <Header.Title>
          Alpha Plan <span className="font-bold text-secondary">Quote</span>
        </Header.Title>
        <Header.Description>
          <p>
            Designed for missionaries serving more than one year, who don’t need cover within the
            USA.
          </p>
        </Header.Description>
        <Header.Body>
          <div className="space-y-4 text-neutral-700">
            <p>
              The Alpha Plan provides international private medical insurance with extra care and
              support for missionaries. It is intended to meet not just medical needs but also the
              security, mental health, and wellness needs of those planning to be in the field for
              more than one year.
            </p>
            <p>
              Alpha also provides full coverage in a missionary’s home country should a member need
              to return home for treatment, or during times of furlough.
            </p>
            <p>
              Alpha has restrictions on cover within the USA. If you are a US citizen or require
              cover within the USA, we recommend our{' '}
              <a
                target="_blank"
                href="https://www.talent-trust.com/insurance/omega-plan/"
                className="text-secondary"
              >
                Omega Plan
              </a>
              .
            </p>
          </div>
          <div className="space-y-4">
            <p>
              <span className="text-primary">Want to know more about Alpha?</span>
            </p>
            <ul className="list-disc ps-10">
              <li>
                <a
                  target="_blank"
                  href="https://www.talent-trust.com/insurance/alpha-plan/#table-of-benefits"
                  className="text-secondary"
                >
                  Table of Benefits
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.talent-trust.com/insurance/alpha-plan/#additional-option"
                  className="text-secondary"
                >
                  Additional Options
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.talent-trust.com/insurance/alpha-plan/#show-popup"
                  className="text-secondary"
                >
                  Terms and More Info
                </a>
              </li>
            </ul>
            <p>
              <a
                target="_blank"
                href="https://www.talent-trust.com/american-alpha-clarification/"
                className="text-secondary"
              >
                or Switch to Omega...
              </a>{' '}
              <span className="text-neutral-300">(click here for a more detailed comparison)</span>
            </p>
          </div>
        </Header.Body>
      </Header>

      <div className="w-full">
        <div className="container">
          <div className="mx-auto w-[95%]">
            <Separator />
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="container">
          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2">
            <div className="space-y-4">
              <Card>
                <HeadingTwo>Insured&apos;s Details</HeadingTwo>
              </Card>
            </div>
            <div className="space-y-4">
              <Card>
                <HeadingTwo>Program</HeadingTwo>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
