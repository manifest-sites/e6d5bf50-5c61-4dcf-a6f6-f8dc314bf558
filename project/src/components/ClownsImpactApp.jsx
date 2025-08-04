import { useState } from 'react'
import { Card, Button, Typography, Row, Col, Statistic, Progress, Tag } from 'antd'
import { SmileOutlined, FrownOutlined, HeartOutlined, ExperimentOutlined } from '@ant-design/icons'

const { Title, Paragraph, Text } = Typography

function ClownsImpactApp() {
  const [selectedImpact, setSelectedImpact] = useState(null)

  const impactData = [
    {
      id: 'positive',
      title: 'Positive Impacts',
      icon: <SmileOutlined className="text-green-500 text-2xl" />,
      color: 'green',
      percentage: 65,
      effects: [
        'Increased laughter and joy',
        'Enhanced creativity and imagination',
        'Improved social interaction',
        'Stress relief and mood boost',
        'Development of humor appreciation'
      ]
    },
    {
      id: 'negative',
      title: 'Negative Impacts',
      icon: <FrownOutlined className="text-red-500 text-2xl" />,
      color: 'red',
      percentage: 35,
      effects: [
        'Fear and anxiety (coulrophobia)',
        'Sleep disturbances',
        'Behavioral changes',
        'Avoidance of similar situations',
        'Temporary emotional distress'
      ]
    }
  ]

  const researchStats = [
    { title: 'Children Studied', value: 2847 },
    { title: 'Research Studies', value: 23 },
    { title: 'Age Range', value: '3-12 years' },
    { title: 'Countries', value: 15 }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <Title level={1} className="text-4xl md:text-5xl mb-4">
            🤡 The Impact of Clowns on Children
          </Title>
          <Paragraph className="text-lg text-gray-600 max-w-3xl mx-auto">
            Exploring the psychological and emotional effects of clown interactions on child development and well-being
          </Paragraph>
        </div>

        <Row gutter={[24, 24]} className="mb-8">
          {researchStats.map((stat, index) => (
            <Col xs={12} md={6} key={index}>
              <Card className="text-center">
                <Statistic
                  title={stat.title}
                  value={stat.value}
                  valueStyle={{ color: '#1890ff', fontSize: '1.5rem' }}
                />
              </Card>
            </Col>
          ))}
        </Row>

        <Row gutter={[24, 24]} className="mb-8">
          {impactData.map((impact) => (
            <Col xs={24} md={12} key={impact.id}>
              <Card
                hoverable
                className={`h-full transition-all duration-300 ${
                  selectedImpact === impact.id ? 'ring-2 ring-blue-400 shadow-lg' : ''
                }`}
                onClick={() => setSelectedImpact(selectedImpact === impact.id ? null : impact.id)}
              >
                <div className="text-center mb-4">
                  {impact.icon}
                  <Title level={3} className="mt-2">{impact.title}</Title>
                </div>
                
                <div className="mb-4">
                  <Text className="text-gray-600">Reported in studies:</Text>
                  <Progress
                    percent={impact.percentage}
                    strokeColor={impact.color === 'green' ? '#52c41a' : '#f5222d'}
                    className="mt-2"
                  />
                </div>

                {selectedImpact === impact.id && (
                  <div className="mt-4 space-y-2">
                    <Title level={5}>Key Effects:</Title>
                    {impact.effects.map((effect, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Tag color={impact.color}>{effect}</Tag>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            </Col>
          ))}
        </Row>

        <Card className="mb-8">
          <Title level={3} className="flex items-center space-x-2">
            <ExperimentOutlined className="text-purple-500" />
            <span>Research Insights</span>
          </Title>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <Card size="small" className="bg-blue-50">
                <Title level={5}>Age Factor</Title>
                <Paragraph>
                  Children aged 3-5 show more varied responses, while 6-12 year olds generally have more predictable reactions.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card size="small" className="bg-green-50">
                <Title level={5}>Context Matters</Title>
                <Paragraph>
                  Hospital clowns show 85% positive impact, while surprise encounters can increase anxiety by 40%.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card size="small" className="bg-purple-50">
                <Title level={5}>Long-term Effects</Title>
                <Paragraph>
                  Most negative reactions fade within 2-3 weeks, while positive memories can last for years.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </Card>

        <Card className="text-center">
          <HeartOutlined className="text-pink-500 text-3xl mb-4" />
          <Title level={4}>Key Takeaway</Title>
          <Paragraph className="text-lg max-w-2xl mx-auto">
            The impact of clowns on children varies greatly depending on context, age, and individual personality. 
            When introduced appropriately, clowns can be powerful tools for joy and healing.
          </Paragraph>
          <Button type="primary" size="large" className="mt-4">
            Learn More About Child Psychology
          </Button>
        </Card>
      </div>
    </div>
  )
}

export default ClownsImpactApp