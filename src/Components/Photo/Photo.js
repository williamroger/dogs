import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET_BY_ID } from '../../api';
import Error  from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from './PhotoContent';
import Head from '../Helper/Head';

const Photo = () => {
  const {id} = useParams();
  const {data, loading, error, request} = useFetch();

  useEffect(() => {
    const { url } = PHOTO_GET_BY_ID(id);

    request(url);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className='container mainContainer'>
        <Head title={data.photo.title} description="Site Dogs" />

        <PhotoContent data={data} single={true} />
      </section>
    );
  else return null;
}

export default Photo;