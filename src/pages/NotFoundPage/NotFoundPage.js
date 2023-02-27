import './NotFoundPage.css';

const NotFoundPage = () => {
    return (
        <div id={'container'}>
            <div className={'content'}>
                <h2>404</h2>
                <h4> Opps! Page not found</h4>
                <p>
                    The page you were looking for doesn`t exist. You may have mistyped the
                    address or the page may have moved.
                </p>

            </div>
        </div>
    );
};

export {NotFoundPage};
