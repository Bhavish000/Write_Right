import CategoriesSingleFour from '@/component/Categories/CategoriesSingleFour';
import SectionTitle from '@/component/common/SectionTitle';
import React from 'react';
// import { Link } from 'react-router-dom';
// import SectionTitle from '../../components/Common/SectionTitle';
// import CategoriesSingleFour from '../../components/Categories/CategoriesSingleFour';

const FranchiseApart = () => {

    return (
        <div className="rs-categories home9-style event-bg pt-50 pb-50 md-pt-70 md-pb-0">
            <div className="container">

                <SectionTitle
                    sectionClass="sec-title mb-60 md-pt-30 text-center md-mb-0"
                    // subtitleClass="sub-title primary"
                    // subtitle="Subject Categories"
                    titleClass="title family mb-0 white-color"
                    title="WHY BECOME MASTERMIND ABACUS FRANCHISE?"
                />

                <div className="row mt-70 md-mt-60">
                    <div className="col-md-4   md-mb-60">
                        <CategoriesSingleFour
                            categoriesClass="categories-items"
                            // categoriesImg={CatImg1}
                            categoriesIcon='fa-solid fa-money-bill-1'
                            // <i class="fa-solid fa-money-bill-1" ></i>
                            categoriesTitle="Teacher’s Training"
                            categoriesDesc="Effective and adaptable training is key to success in the education industry. At Write Right, we focus on two dimensions"
                            // btnText="Join Program"
                            // catNum='100'
                        />
                    </div>
                    <div className="col-md-4  md-mb-60">
                        <CategoriesSingleFour
                            categoriesClass="categories-items"
                            // categoriesImg={CatImg2}
                            categoriesIcon='fa-solid fa-money-bill-1'
                            categoriesTitle=" Operation Support"
                            categoriesDesc="Support is crucial for franchise success. Write Right offers"
                            // btnText="Join Program"
                            catNum='130'
                        />
                    </div>
                    <div className="col-md-4   md-mb-0">
                        <CategoriesSingleFour
                            categoriesClass="categories-items"
                            // categoriesImg={CatImg3}
                            categoriesIcon='fa fa-laptop'
                            categoriesTitle=" Basket of 7 Products"
                            categoriesDesc="A Write Right Franchise gains access to a wide range of handwriting and creativity programs designed to develop good handwriting skills and fine motor coordination, essential for a child's academic excellence."
                            catNum='120'
                        />
                    </div>
                </div>
              
            </div>
        </div>
    );
}

export default FranchiseApart;



















