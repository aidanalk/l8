import React from "react";

export const Container = ({ variant = 'mid', childern}) => {
    return(
        <div className={[variant + 'Container']}>
            {childern}
        </div>
    )
}