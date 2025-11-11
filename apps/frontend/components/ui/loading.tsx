import React from 'react';
import { Loader2 } from 'lucide-react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <Loader2 className="h-10 w-10 animate-spin text-cyan-400" />
    </div>
  );
}

export default Loader;
