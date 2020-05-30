/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
    render() {
        const { siteConfig, language = "" } = this.props;
        const { baseUrl, docsUrl } = siteConfig;
        const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
        const langPart = `${language ? `${language}/` : ""}`;
        const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

        const Logo = (props) => (
            <div className="projectLogo">
                <img src={props.img_src} alt="Project Logo" />
            </div>
        );

        const ProjectTitle = (props) => (
            <h2 className="projectTitle">
                {props.title}
                <small>{props.tagline}</small>
            </h2>
        );

        return (
            <div
                style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    paddingBottom: "200px",
                }}
            >
                <img src={siteConfig.headerIcon} alt="Project Logo" />

                <h1
                    style={{
                        margin: 0,
                        marginTop: "20px",
                        fontSize: "62px",
                        fontWeight: "bold",
                    }}
                >
                    Atomize
                </h1>

                <h3
                    style={{
                        margin: 0,
                        marginTop: "10px",
                        color: "rgba(0,0,0,0.6)",
                        fontWeight: 500,
                    }}
                >
                    Enhance your React.js code quality and workflow
                </h3>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "20px",
                    }}
                >
                    <a href={docUrl("overview")}>
                        <div
                            style={{
                                borderRadius: "5px",
                                padding: "10px 40px",
                                fontSize: "20px",
                                fontWeight: 500,
                                color: siteConfig.colors.primaryColor,
                                background: siteConfig.colors.secondaryColor,
                                boxShadow: "0px 2px 20px rgba(0,0,0,0.2)",
                            }}
                        >
                            Get started
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

class Index extends React.Component {
    render() {
        const { config: siteConfig, language = "" } = this.props;
        const { baseUrl } = siteConfig;

        const Block = (props) => (
            <Container
                padding={["bottom", "top"]}
                id={props.id}
                background={props.background}
            >
                <GridBlock
                    align="center"
                    contents={props.children}
                    layout={props.layout}
                />
            </Container>
        );

        const FeatureCallout = () => (
            <div
                className="productShowcaseSection paddingBottom"
                style={{ textAlign: "center" }}
            >
                <h2>Feature Callout</h2>
                <MarkdownBlock>
                    These are features of this project
                </MarkdownBlock>
            </div>
        );

        const TryOut = () => (
            <Block id="try">
                {[
                    {
                        content:
                            "To make your landing page more attractive, use illustrations! Check out " +
                            "[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. " +
                            "The illustrations you see on this page are from unDraw.",
                        image: `${baseUrl}img/undraw_code_review.svg`,
                        imageAlign: "left",
                        title: "Wonderful SVG Illustrations",
                    },
                ]}
            </Block>
        );

        const LearnHow = () => (
            <Block background="light">
                {[
                    {
                        content:
                            "Each new Docusaurus project has **randomly-generated** theme colors.",
                        image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
                        imageAlign: "right",
                        title: "Randomly Generated Theme Colors",
                    },
                ]}
            </Block>
        );

        const Features = () => (
            <Block layout="fourColumn">
                {[
                    {
                        content: "This is the content of my feature",
                        image: `${baseUrl}img/undraw_react.svg`,
                        imageAlign: "top",
                        title: "Feature One",
                    },
                    {
                        content: "The content of my second feature",
                        image: `${baseUrl}img/undraw_operating_system.svg`,
                        imageAlign: "top",
                        title: "Feature Two",
                    },
                ]}
            </Block>
        );

        return (
            <div>
                <HomeSplash siteConfig={siteConfig} language={language} />
            </div>
        );
    }
}

module.exports = Index;
