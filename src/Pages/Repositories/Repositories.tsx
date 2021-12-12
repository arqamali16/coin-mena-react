import React, { useState } from "react";
import _ from "lodash";
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
} from "antd";
import { useValues } from "kea";
import {
  BookOutlined,
  StarOutlined,
  ForkOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import ReposetoriesLogic from "../../Redux/repositoriesLogic";

import { IRepository } from "../../Types/RepositoriesIntefaces";

const Repositories = () => {
  const { loading, reposetories } = useValues(ReposetoriesLogic);
  const navigate = useNavigate();

  const [menuIten, setMenuItem] = useState(
    _.last(_.split(window.location.href, "/"))
  );

  const IconText = ({ icon, text }: any) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        3rd menu item
      </Menu.Item>
    </Menu>
  );

  const onMenuChange = ({ target }: any) => {
    console.log(target.value);
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
          <div className="list-wrapper">
            <Card
              className="repo-list"
              title={
                <Radio.Group
                  defaultValue="repositories"
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
                dataSource={reposetories}
                renderItem={(item: IRepository) => (
                  <List.Item
                    key={item.title}
                    actions={[
                      <span>{item.language}</span>,
                      <IconText
                        icon={StarOutlined}
                        text={item.totalStars}
                        key="list-vertical-star-o"
                      />,
                      <IconText
                        icon={ForkOutlined}
                        text={item.forks}
                        key="list-vertical-message"
                      />,
                      <Space>
                        <span>built by</span>
                        {_.map(item.builtBy, (each) => (
                          <Avatar size="small" src={each.avatar} />
                        ))}
                      </Space>,
                    ]}
                    extra={
                      <Dropdown.Button overlay={menu}>
                        <StarOutlined />
                        Star
                      </Dropdown.Button>
                    }
                  >
                    <List.Item.Meta
                      //   avatar={<BookOutlined className="font-color-8b949e" />}
                      title={
                        <Space>
                          <BookOutlined className="font-color-8b949e" />
                          <a
                            href={item.url}
                          >{`${item.username} / ${item.repositoryName}`}</a>
                        </Space>
                      }
                      description={item.description}
                    />
                  </List.Item>
                )}
              />
            </Card>
          </div>
        </Col>
      </Row>
    </Spin>
  );
};

export default Repositories;
