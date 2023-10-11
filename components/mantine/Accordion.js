'use client';
import { list } from '@/dummyText';
import { Accordion, Container, Group, Text, Title } from '@mantine/core';

function AccordionLabel({ label, description }) {
  return (
    <Group noWrap>
      <div>
        <Title w={'100%'} order={4} ta={''} fw={'bold'}>
          {label}
        </Title>
        {description && (
          <Text
            fs={'italic'}
            size="sm"
            fw={'normal'}
            color="dimmed"
            weight={400}
            w={'100%'}
          >
            {description}
          </Text>
        )}
      </div>
    </Group>
  );
}

function Demo() {
  const items = list.map((item) => (
    <Accordion.Item value={item.id} key={item.label}>
      <Accordion.Control className="!w-full" {...item}>
        <AccordionLabel className="!w-full" {...item} />
      </Accordion.Control>
      <Accordion.Panel w={'100%'}>
        {item.content.map((text, i) => (
          <Text className="leading-relaxed" key={i} size="md" mb={10}>
            {text}
          </Text>
        ))}
      </Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <Container>
      <Accordion chevronPosition="right" variant="filled" mt={80}>
        {items}
      </Accordion>
    </Container>
  );
}

export default Demo;
