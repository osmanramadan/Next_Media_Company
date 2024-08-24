import React from 'react'
import style from './sectiontitle.module.css'

export default function SectionTitle({ txt }: { txt: string }) {
    return (
      <div>
        <p className={style.title}>
          {txt}
        </p>
      </div>
    );
  }
  