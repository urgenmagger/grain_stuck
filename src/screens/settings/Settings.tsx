import React, { FC, useRef, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  View,
} from "react-native";

import { useGetImages } from "../../api/hooks/useGetImages";
import { ImageCard } from "./components/imageCard/ImageCard";
import { ApiResponse, User } from "../../common/types/common";
import { FullScreenLoader } from "../../common/components/FullScreenLoader";
import { LineIndicator } from "./components/indicator/Indicator";

export const Settings: FC = () => {
  const { data, fetchNextPage, isFetchingNextPage, isLoading, refetch, error } =
    useGetImages();
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  console.log("urgen currentIndex", currentIndex);

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const index = Math.floor(offsetY / 100);

    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  const handleIndexChange = (index: number) => {
    setCurrentIndex(index);
  };

  const renderItem = ({ item, index }: { item: User; index: number }) => {
    return <ImageCard imageUrl={item?.picture} />;
  };
  const FlattenData = data?.pages?.flatMap((page) => page?.data || []);

  return (
    <>
      <View style={styles.container}>
        {isLoading && <FullScreenLoader />}
        <FlatList
          data={FlattenData?.flatMap((item) => item?.data || []) || []}
          renderItem={renderItem}
          keyExtractor={(item) => item?.id}
          showsHorizontalScrollIndicator={false}
          onEndReached={fetchNextPage}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          onEndReachedThreshold={0.1}
          ListFooterComponent={() =>
            isFetchingNextPage ? (
              <ActivityIndicator size="small" color="red" />
            ) : null
          }
        />
      </View>
      <LineIndicator currentIndex={currentIndex} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
