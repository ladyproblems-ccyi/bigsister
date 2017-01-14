import React from 'react';
import uuid from 'uuid';


const ProfileSearch = (profiles, searchProfiles) => {
  let query;
  console.log(profiles.profiles);
  return (
    <div>
      <input placeholder="Search Profiles"
              ref={node => {
                query = node;
              }}
              onChange={() => {
                searchProfiles(query.value);
              }}
            />
            {profiles.profiles.map(profile =>
              <ul key={uuid.v4()}>
                <li key={uuid.v4()}>name: {profile.name}</li>
                <li key={uuid.v4()}>email: {profile.email}</li>
              </ul>
            )}
  </div>
  )
};

export default ProfileSearch;
