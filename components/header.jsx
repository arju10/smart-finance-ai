import React from 'react';

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const Header = async () => {
  return (
    <div className="bg-blue-50 py-4">
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default Header;
