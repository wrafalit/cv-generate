insert into
    users (email, password)
values
    ('admin@example.com', '{noop}adminpass'),   -- 1
    ('editor@example.com', '{noop}editorpass'), -- 2
    ('max.kolonko@email.com', '{noop}maxuserpass'),     -- 3
    ('jan.kowalski@email.com', '{noop}januserpass');     -- 4

insert into
    user_role (name, description)
values
    ('ADMIN', 'pełne uprawnienia'),   -- 1
    ('EDITOR', 'podstawowe uprawnienia + możliwość zarządzania treściami'),   -- 2
    ('USER', 'podstawowe uprawnienia, możliwość edycji profilu');   -- 3

insert into
    user_roles (user_id, role_id)
values
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 3);