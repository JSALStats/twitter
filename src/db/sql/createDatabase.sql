-- Create the overview table
CREATE TABLE overview (
    channel_id TEXT UNIQUE,
    lookup_id INTEGER UNIQUE,
    is_internal BOOLEAN,
    subscriber_count INTEGER,
    subscriber_count_hit_time TIMESTAMP
);

-- Populate the overview table
INSERT INTO overview (channel_id, lookup_id, is_internal) VALUES
    ('UCewMTclBJZPaNEfbf-qYMGA', 01, false),
    ('UCxLIJccyaRQDeyu6RzUsPuw', 02, false),
    ('UCyktGLVQchOpvKgL7GShDWA', 03, false),
    ('UCd15dSPPT-EhTXekA7_UNAQ', 04, false),
    ('UCUXNOmIdsoyd5fh5TZHHO5Q', 05, true),
    ('UCrZKnWgOaYTTc7sc1KsVXZw', 06, true),
    ('UCqx-my2rOoQuEOHKNNgNppw', 07, false),
    ('UCpCJRHoggwXQhuFbW4gjM_w', 08, false),
    ('UCF9R3Ln-u52vUdSO-pFdETw', 09, false),
    ('UCbu2qTa75eyjwCKOugX8F6A', 10, false),
    ('UChLNLQ6r-aGrIFWo_1A9tKQ', 11, false),
    ('UCJ4w2lMYOnBwsgQdFgbLqIg', 12, false),
    ('UCgKbwxXkz95TYVcpvpkCjag', 13, false),
    ('UCBCuUUPr6Lo8RmmhVFySoiQ', 14, false),
    ('UC_7K5gOJJ3urQR53ltIck8w', 15, false);

-- Create history tables for each channel using lookup_id
CREATE TABLE history_01 (
    subscriber_count INTEGER,
    time_hit TIMESTAMP
);

CREATE TABLE history_02 (
    subscriber_count INTEGER,
    time_hit TIMESTAMP
);

CREATE TABLE history_03 (
    subscriber_count INTEGER,
    time_hit TIMESTAMP
);

CREATE TABLE history_04 (
    subscriber_count INTEGER,
    time_hit TIMESTAMP
);

CREATE TABLE history_05 (
    subscriber_count INTEGER,
    time_hit TIMESTAMP
);

CREATE TABLE history_06 (
    subscriber_count INTEGER,
    time_hit TIMESTAMP
);

CREATE TABLE history_07 (
    subscriber_count INTEGER,
    time_hit TIMESTAMP
);

CREATE TABLE history_08 (
    subscriber_count INTEGER,
    time_hit TIMESTAMP
);

CREATE TABLE history_09 (
    subscriber_count INTEGER,
    time_hit TIMESTAMP
);

CREATE TABLE history_10 (
    subscriber_count INTEGER,
    time_hit TIMESTAMP
);

CREATE TABLE history_11 (
    subscriber_count INTEGER,
    time_hit TIMESTAMP
);

CREATE TABLE history_12 (
    subscriber_count INTEGER,
    time_hit TIMESTAMP
);

CREATE TABLE history_13 (
    subscriber_count INTEGER,
    time_hit TIMESTAMP
);

CREATE TABLE history_14 (
    subscriber_count INTEGER,
    time_hit TIMESTAMP
);

CREATE TABLE history_15 (
    subscriber_count INTEGER,
    time_hit TIMESTAMP
);
