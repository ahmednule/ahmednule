import React from 'react'
import SectionHeader from '../../wrappers/SectionHeader'
import CertificationsList from './CertificationsList'
import SectionWrapper from '../../wrappers/SectionWrapper'

export default function Certifications () {
  return (
    <SectionWrapper>
        <SectionHeader className='text-center'>Certifications &amp; Achievements</SectionHeader>
        <CertificationsList />
    </SectionWrapper>
  )
}