// src/components/BadgeList.tsx
import { Badge } from '@/src/components/ui/badge';
import React from 'react';
import { ArrowRight } from 'lucide-react';

type BadgeColorVariant = 'default' | 'secondary' | 'destructive' | 'outline' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'violet';

const badgeData = [
  { name: "Coverage", color: 'red' as BadgeColorVariant },
  { name: "Additional Benefits", color: 'orange' as BadgeColorVariant },
  { name: "Claim Process", color: 'yellow' as BadgeColorVariant },
  { name: "Premium Payment", color: 'violet' as BadgeColorVariant },
  { name: "Exclusions", color: 'indigo' as BadgeColorVariant }
];

const BadgeList: React.FC = () => {
  return (
    <div className="flex space-x-4 cursor-move ">
      {badgeData.map((badge, index) => (
        <div key={index} className="flex items-center space-x-2">
          <Badge variant={badge.color} size="large" className="flex-shrink-0">{badge.name}</Badge>
          {index < badgeData.length - 1 && <ArrowRight />}
        </div>
      ))}
    </div>
  );
};

export default BadgeList;
