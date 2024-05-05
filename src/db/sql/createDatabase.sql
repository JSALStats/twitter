-- Create the overview table
CREATE TABLE overview (
    channel_id TEXT UNIQUE,
    lookup_id INTEGER UNIQUE,
    subscriber_count INTEGER,
    subscriber_count_hit_time INTEGER
);

-- Populate the overview table
INSERT INTO overview (channel_id, lookup_id) VALUES
    ('UCewMTclBJZPaNEfbf-qYMGA', 01),
    ('UCxLIJccyaRQDeyu6RzUsPuw', 02),
    ('UCyktGLVQchOpvKgL7GShDWA', 03),
    ('UCd15dSPPT-EhTXekA7_UNAQ', 04),
    ('UCUXNOmIdsoyd5fh5TZHHO5Q', 05),
    ('UCrZKnWgOaYTTc7sc1KsVXZw', 06),
    ('UCqx-my2rOoQuEOHKNNgNppw', 07),
    ('UCpCJRHoggwXQhuFbW4gjM_w', 08),
    ('UCF9R3Ln-u52vUdSO-pFdETw', 09),
    ('UCbu2qTa75eyjwCKOugX8F6A', 10),
    ('UChLNLQ6r-aGrIFWo_1A9tKQ', 11),
    ('UCJ4w2lMYOnBwsgQdFgbLqIg', 12),
    ('UCgKbwxXkz95TYVcpvpkCjag', 13),
    ('UCBCuUUPr6Lo8RmmhVFySoiQ', 14),
    ('UC_7K5gOJJ3urQR53ltIck8w', 15);

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
