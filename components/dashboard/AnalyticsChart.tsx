'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import data from '@/data/analytics'

const AnalyticsChart = () => {
  return ( 
    <>
      <Card>
        <CardHeader>
          <CardTitle
            className='font-medium'
          >
            This Year's Analytics
          </CardTitle>
          <CardDescription>Views Per Month</CardDescription>
        </CardHeader>
      </Card>
    </>
   )
}
 
export default AnalyticsChart