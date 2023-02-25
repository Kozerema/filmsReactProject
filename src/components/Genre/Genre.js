const Genre = ({genreOne}) => {

const {id,name}=genreOne



    return (
        <div>
            <div>
                {id}---{name}
            </div>
        </div>
    );
};

export {Genre};
