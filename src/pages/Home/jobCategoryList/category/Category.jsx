
import PropTypes from 'prop-types';

const Category = ({category}) => {
    const {category_name, logo, availability } = category
    return (
        <div className='text-left bg-sky-100 p-5 rounded-md'>
            <img className='w-8' src={logo} alt={category_name} />
            <h4 className='font-semibold'>{category_name}</h4>
            <p>{availability}</p>
        </div>
    );
};

Category.propTypes = {
    category: PropTypes.object
};

export default Category;