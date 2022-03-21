import { Helmet } from "react-helmet-async";

const TitleComponent = ({ title = null }) => {
    const defaultTitle = 'Rock &amp; Roll with React';
    return (
        <Helmet>
            <title>{title ? `${title} | ` : ''}{defaultTitle}</title>
        </Helmet>
    );
};

export default TitleComponent;