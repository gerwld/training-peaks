import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

import { AuthSocialService } from '@/api/AuthService';
import { getUser } from '@/redux/reducers/auth-reducer';
import generateOauthGoogleLink from '@/utils/generateOauthGoogleLink';

const AuthSocial = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [searchParams] = useSearchParams();
  const nav = useNavigate();
  const code = searchParams.get('code');

  useEffect(() => {
    /**
    * Google OAuth
    **/
    if(params.authBy === 'google') {
      if(code) {
        // dispatch(getUser(data))
        console.log('Setting JWT from Google...');
      } 
      else {
        AuthSocialService.getClientIDGoogle()
        .then(({data}) => {
          const link = generateOauthGoogleLink(data);
          console.log(link);
          window.location.replace(link);
        })
        .catch((_) =>  nav('/'))
      }

    } else nav('/');
  }, [params.authBy]);
  
  return (
    <div className='oauth-page'>Redirecting... Please wait</div>
  )
}

export default AuthSocial