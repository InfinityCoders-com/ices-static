import React, { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';

const CLIENT_ID = 'YOUR_CLIENT_ID_HERE';
const SCOPE = 'https://www.googleapis.com/auth/photoslibrary.readonly';

const GooglePhotosViewer = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: CLIENT_ID,
        scope: SCOPE,
      });
    }

    gapi.load('client:auth2', start);
  }, []);

  const handleLogin = async () => {
    const auth = gapi.auth2.getAuthInstance();
    await auth.signIn();
    const token = auth.currentUser.get().getAuthResponse().access_token;

    const res = await fetch('https://photoslibrary.googleapis.com/v1/mediaItems?pageSize=10', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    setPhotos(data.mediaItems || []);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login to Google Photos</button>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {photos.map((photo: any) => (
          <img
            key={photo.id}
            src={`${photo.baseUrl}=w200-h200`}
            alt={photo.filename}
            style={{ margin: '8px' }}
          />
        ))}
      </div>
    </div>
  );
};

export default GooglePhotosViewer;
