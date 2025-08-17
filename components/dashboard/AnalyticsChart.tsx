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
        <CardContent>
          <div 
            style={{width: '100%', height: 300}}
          >
            <ResponsiveContainer>
              <LineChart
                width={1100}
                height={300}
                data={data}
              >
                <Line 
                  type='monotone'
                  dataKey='uv'
                  stroke='#ff4500'
                />
                <CartesianGrid
                stroke='#ccc'
              />
              </LineChart>
              
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </>
   )
}
 
export default AnalyticsChart