"""empty message

Revision ID: 89ff95dcc101
Revises: dd480d087434
Create Date: 2020-11-11 16:42:09.860653

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '89ff95dcc101'
down_revision = 'dd480d087434'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('spm93table',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('device_id', sa.String(length=128), nullable=True),
    sa.Column('voltage_pa', sa.Float(), nullable=True),
    sa.Column('voltage_pb', sa.Float(), nullable=True),
    sa.Column('voltage_pc', sa.Float(), nullable=True),
    sa.Column('current_pa', sa.Float(), nullable=True),
    sa.Column('current_pb', sa.Float(), nullable=True),
    sa.Column('current_pc', sa.Float(), nullable=True),
    sa.Column('frequency', sa.Float(), nullable=True),
    sa.Column('totalapparentpower', sa.Float(), nullable=True),
    sa.Column('totalactiveennegry', sa.Float(), nullable=True),
    sa.Column('totalreactiveennegry', sa.Float(), nullable=True),
    sa.Column('activepower_pa', sa.Float(), nullable=True),
    sa.Column('activepower_pb', sa.Float(), nullable=True),
    sa.Column('activepower_pc', sa.Float(), nullable=True),
    sa.Column('totalactivepower', sa.Float(), nullable=True),
    sa.Column('reactivepower_pa', sa.Float(), nullable=True),
    sa.Column('reactivepower_pb', sa.Float(), nullable=True),
    sa.Column('reactivepower_pc', sa.Float(), nullable=True),
    sa.Column('totalreactivepower', sa.Float(), nullable=True),
    sa.Column('timestamp', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.drop_table('spm93model')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('spm93model',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('device_id', sa.VARCHAR(length=128), autoincrement=False, nullable=True),
    sa.Column('voltage_pa', postgresql.DOUBLE_PRECISION(precision=53), autoincrement=False, nullable=True),
    sa.Column('voltage_pb', postgresql.DOUBLE_PRECISION(precision=53), autoincrement=False, nullable=True),
    sa.Column('voltage_pc', postgresql.DOUBLE_PRECISION(precision=53), autoincrement=False, nullable=True),
    sa.Column('current_pa', postgresql.DOUBLE_PRECISION(precision=53), autoincrement=False, nullable=True),
    sa.Column('current_pb', postgresql.DOUBLE_PRECISION(precision=53), autoincrement=False, nullable=True),
    sa.Column('current_pc', postgresql.DOUBLE_PRECISION(precision=53), autoincrement=False, nullable=True),
    sa.Column('frequency', postgresql.DOUBLE_PRECISION(precision=53), autoincrement=False, nullable=True),
    sa.Column('totalapparentpower', postgresql.DOUBLE_PRECISION(precision=53), autoincrement=False, nullable=True),
    sa.Column('totalactiveennegry', postgresql.DOUBLE_PRECISION(precision=53), autoincrement=False, nullable=True),
    sa.Column('totalreactiveennegry', postgresql.DOUBLE_PRECISION(precision=53), autoincrement=False, nullable=True),
    sa.Column('activepower_pa', postgresql.DOUBLE_PRECISION(precision=53), autoincrement=False, nullable=True),
    sa.Column('activepower_pb', postgresql.DOUBLE_PRECISION(precision=53), autoincrement=False, nullable=True),
    sa.Column('activepower_pc', postgresql.DOUBLE_PRECISION(precision=53), autoincrement=False, nullable=True),
    sa.Column('totalactivepower', postgresql.DOUBLE_PRECISION(precision=53), autoincrement=False, nullable=True),
    sa.Column('reactivepower_pa', postgresql.DOUBLE_PRECISION(precision=53), autoincrement=False, nullable=True),
    sa.Column('reactivepower_pb', postgresql.DOUBLE_PRECISION(precision=53), autoincrement=False, nullable=True),
    sa.Column('reactivepower_pc', postgresql.DOUBLE_PRECISION(precision=53), autoincrement=False, nullable=True),
    sa.Column('totalreactivepower', postgresql.DOUBLE_PRECISION(precision=53), autoincrement=False, nullable=True),
    sa.Column('timestamp', postgresql.TIMESTAMP(), autoincrement=False, nullable=True),
    sa.PrimaryKeyConstraint('id', name='spm93model_pkey')
    )
    op.drop_table('spm93table')
    # ### end Alembic commands ###
