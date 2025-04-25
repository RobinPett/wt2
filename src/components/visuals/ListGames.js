import { useEffect, useState, useRef } from "react"
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid'
import Paper from '@mui/material/Paper'
import { fetchUtils } from "../../services";
import { toast } from "sonner";
import Loader from "../info/Loader";

/**
 * List games component.
 */
const ListGames = ({ genre, year }) => {
    const [games, setGames] = useState([])
    const [pageSize, setPageSize] = useState(5)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'title', headerName: 'Title', width: 300 },
        {
            field: 'release_year',
            headerName: 'Release year',
            type: 'number',
            width: 100,
        },
    ]

    useEffect(() => {
        const fetchGames = async () => {
            try {
                setLoading(true)
                const data = await fetchUtils.getGamesByYearAndGenre(year, genre, pageSize, page)
                setGames(data.games)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error)
                toast.error('Error fetching data')
            }
        }
        fetchGames()
    }, [page, pageSize, genre, year])

    return (
        <div>
            <div style={{ padding: '10px' }}>
                <h1 style={{ padding: '10px' }}>List of <b>{genre}</b> games in <b>{year}</b></h1>
                {loading && <Loader blur={true} />}
            </div>
            <Paper sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={games}
                    columns={columns}
                    pagination
                    paginationMode="server"
                    pageSize={pageSize}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    onPageChange={(newPage) => setPage(newPage)}
                    pageSizeOptions={[5, 10]}
                    sx={{ border: 0 }}
                />
            </Paper>
        </div>
    );
}

export default ListGames