import psycopg2 as pg


# config soucer database
db_host = 'localhost'
db_name = 'powermanagesystem'
db_user = 'postgres'
db_pass = '0000'

# connect to database postgresSQL

connection = pg.connect("host='"+db_host+"' dbname='"+db_name+"' user='"+db_user+"' password='"+db_pass+"'")

# funcion query database
def run(query, params):
    with connection:
        with connection.cursor() as cursor:
            cursor.execute(query, params)
            connection.commit()
            return True


