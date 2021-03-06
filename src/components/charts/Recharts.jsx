import React from 'react';
import { Row, Col, Card } from 'antd';
import RechartsSimpleLineChart from './RechartsSimpleLineChart';
import RechartsBarChart from './RechartsBarChart';
import RechartsRadialBarChart from './RechartsRadialBarChart';
import RechartsRadarChart from './RechartsRadarChart';
import BreadcrumbCustom from '../BreadcrumbCustom';

class Recharts extends React.Component {
    render() {
        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="Chart" second="Recharts" />
                <Row gutter={16}>
                    <Col className="gutter-row" span={24}>
                        <div className="gutter-box">
                            <Card title="基础线形图" bordered={false}>
                                <RechartsSimpleLineChart />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" span={24}>
                        <div className="gutter-box">
                            <Card title="基础线形图" bordered={false}>
                                <RechartsBarChart />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" span={12}>
                        <div className="gutter-box">
                            <Card title="基础线形图" bordered={false}>
                                <RechartsRadialBarChart />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div className="gutter-box">
                            <Card title="基础线形图" bordered={false}>
                                <RechartsRadarChart />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Recharts;