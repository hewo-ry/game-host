'use client';

import { getMapJSON } from 'dotted-map';
import DottedMap from 'dotted-map/without-countries';

import styles from './styles.module.scss';

const servers = [
    { name: 'Helsinki', coordinates: [24.938379, 60.169855] as [number, number] },
    { name: 'Falkenstein', coordinates: [12.370071, 50.47612] as [number, number] },
    { name: 'ash-dc1', coordinates: [-77.487073, 39.045821] as [number, number] },
    { name: 'hil-dc1', coordinates: [-122.951924, 45.54222] as [number, number] },
    { name: 'nbg1-dc3', coordinates: [11.076665, 49.452102] as [number, number] },
    { name: 'sin-dc1', coordinates: [103.833333, 1.283333] as [number, number] },
];

const mapJson = getMapJSON({ height: 80, grid: 'vertical' });

const ServerMap = () => {
    const map = new DottedMap({ map: JSON.parse(mapJson) });

    servers.forEach((server) => {
        map.addPin({
            lng: server.coordinates[0],
            lat: server.coordinates[1],
            svgOptions: { color: '#000000', radius: 0.5 },
        });
    });

    const svgMap = map.getSVG({
        radius: 0.25,
        color: '#8b949e',
        shape: 'circle',
    });

    return (
        <div className={styles.mapWrapper}>
            <h2>Server locations</h2>
            <div dangerouslySetInnerHTML={{ __html: svgMap }} />
        </div>
    );
};

export default ServerMap;
