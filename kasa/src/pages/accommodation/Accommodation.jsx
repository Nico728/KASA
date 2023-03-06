import React, { Navigate } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Carrousel from '../../components/carrousel/Carrousel';
import ListAccommodation from '../../datas/api/accommodation.json';

const Accommodation = () => {
    const identifiant =useParams();
    const logementId = ListAccommodation.find((logement) => logement.id === identifiant.id);

    return (
        <div>
            <Header />
            {logementId ? (
                <div>
                    <Carrousel images={logementId?.pictures} />
                </div>
            ) : <Navigate replace to="/error" />
            }
            <Footer />
        </div>
    );
};

export default Accommodation;