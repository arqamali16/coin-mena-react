import React, { useState } from "react";
import {
  Card,
  List,
  Avatar,
  Space,
  Row,
  Col,
  Typography,
  Radio,
  Dropdown,
  Menu,
  Spin,
  Button,
} from "antd";
import { useValues } from "kea";
import {
  BookOutlined,
  StarOutlined,
  FireOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import DevelopersLogic from "../../Redux/developersLogic";
import _ from "lodash";

const Developers = () => {
  const { loading, developers } = useValues(DevelopersLogic);
  const navigate = useNavigate();

  const [menuIten, setMenuItem] = useState(
    _.last(_.split(window.location.href, "/"))
  );

  const onMenuChange = ({ target }: any) => {
    if (target.value === "developers") navigate("/developers");
    else navigate("/");
  };

  return (
    <Spin spinning={loading}>
      <Row gutter={[24, 24]}>
        <Col span={24} className="flex-display header">
          <Typography.Title level={4}>Trending</Typography.Title>
          <p>See what the GitHub community is most excited about today.</p>
        </Col>
        <Col span={24}>
          <Card
            className="repo-list developer-list"
            title={
              <Radio.Group
                defaultValue={menuIten}
                optionType="button"
                buttonStyle="solid"
                onChange={onMenuChange}
              >
                <Radio.Button value="repositories">Repositories</Radio.Button>
                <Radio.Button value="developers">Developers</Radio.Button>
              </Radio.Group>
            }
          >
            <List
              itemLayout="vertical"
              size="large"
              dataSource={developers}
              renderItem={(item: any) => (
                <List.Item key={item.title} extra={<Button>Follow</Button>}>
                  <List.Item.Meta
                    avatar={
                      <Space size="large">
                        <span className="rank-button">{item.rank}</span>
                        <Avatar size="large" src={item.avatar} />
                      </Space>
                    }
                    title={<a href={item.url}>{item.username} </a>}
                    description={item.name}
                  />
                  {
                    <Space direction="vertical" className="developer-detail">
                      <Space>
                        <FireOutlined className="color-db6d28" />
                        <span className="color-8b949e">POPULAR REPO</span>
                      </Space>
                      <Space>
                        <BookOutlined className="font-color-8b949e" />
                        <a href={item.href} className="sub-header">
                          {item.popularRepository.repositoryName}
                        </a>
                      </Space>
                      <p className="f6">{item.popularRepository.description}</p>
                    </Space>
                  }
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </Spin>
  );
};

export default Developers;
