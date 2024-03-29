import React from 'react';
import SvgImage from '../../svg/svg-image';
import * as S from './player-volume.style';

const PlayerVolume = () => {
    return (
        <S.PlayerVolumeBlock>
            <S.PlayerVolumeContent>
                <S.PlayerVolumeImageWrapper>
                    <S.PlayerVolumeSVGWrapper>
                        <SvgImage
                            href="img/icon/sprite.svg#icon-volume"
                            ariaLabel="volume"
                        />
                    </S.PlayerVolumeSVGWrapper>
                </S.PlayerVolumeImageWrapper>
                <S.PlayerVolumeProgressWrapper>
                    <S.PlayerVolumeProgressLine type="range" name="range" />
                </S.PlayerVolumeProgressWrapper>
            </S.PlayerVolumeContent>
        </S.PlayerVolumeBlock>
    );
};

export default PlayerVolume;
