import React from 'react'
import { Container, Row, Col, Button, ButtonToggle } from 'reactstrap';
import "./styles.scss";
function Header() {
    return (
        <>
        <Row>
            <Col xs="12" md="6" className="offset-4">
                <p className="companyName"> وب رمز</p>
          </Col>
            <Col xs="12" md="2">
                <ButtonToggle color="success">ورود</ButtonToggle>{' '}
                <ButtonToggle color="danger">ثبت نام</ButtonToggle>{' '}
            </Col>  
        </Row>
        <Row>
            <Col>
                <p className="descripton">ساخت و صدور فاکتور فروش بصورت آنلاین خدمتی دیگر از وب رمز</p>
            </Col>
        </Row>
        <Row className="buttonBar p-3" >
            <Col md="3">
            <Button color="danger">چاپ فاکتور</Button>{' '}
            <Button color="success">افزودن ردیف</Button>{' '}
            </Col>
            <Col md="9">
            <Button  className="mx-3"> آموزش ثبت فاکتور</Button>{' '}
            <Button color="primary" className="mx-3"> تغییر پوسته فاکتور</Button>{' '}
            <Button color="primary" className="mx-3"> فعال سازی امکانات پیشرفته</Button>{' '}
            <Button color="primary" className="mx-3"> پیامک اطلاعات فاکتور</Button>{' '}
            </Col>
        </Row>
        </>

    )
}

export default Header
